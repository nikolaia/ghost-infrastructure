VAGRANT_ROOT = File.dirname(__FILE__)

Vagrant.configure("2") do |config|

  config.vm.provider "docker" do |d|
    d.vagrant_vagrantfile = "hostmachine/Vagrantfile"
    d.vagrant_machine = "nna-docker-ghost"
  end

  config.vm.define "mysql" do |v|
    v.vm.provider "docker" do |d|
      d.name = "mysql"
      d.image = "mysql"
      d.env = {
        MYSQL_USER: "root",
        MYSQL_PASSWORD: "supersecret",
        MYSQL_DATABASE: "ghost",
        MYSQL_ROOT_PASSWORD: "supersecret"
      }
    end
  end

  config.vm.define "nginx" do |v|
    v.vm.provider "docker" do |d|
      d.name = "nginx"
      d.image = "dockerfile/nginx"
      d.ports = [ "80:8080" ]
      d.volumes = ["/tmp/nginx:/etc/nginx/conf.d"]
    end
  end

  config.vm.define "docker-gen" do |v|
    v.vm.provider "docker" do |d|
      d.name = "docker-gen"
      d.image = "jwilder/docker-gen"
      d.create_args = ["--volumes-from", "nginx"]
      d.volumes = ["/etc/docker-gen/templates:/etc/docker-gen/templates", "/var/run/docker.sock:/tmp/docker.sock"]
      d.cmd = ["-notify-sighup", "nginx", "-watch", "-only-published", "/etc/docker-gen/templates/nginx.tmpl", "/etc/nginx/conf.d/default.conf"]
    end
  end

  config.vm.define "ghost" do |v|
    v.vm.provider "docker" do |d|
      d.name = "ghost"
      d.image = "dockerfile/ghost"
      d.volumes = [VAGRANT_ROOT+"/ghost:/ghost-override"]
      d.env = {
        VIRTUAL_HOST: "localhost:8080"
      }
      d.link("mysql:db")
    end
  end

end
