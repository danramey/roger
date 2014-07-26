#
# Cookbook Name:: roger
# Recipe:: config
#
execute "epel" do
	# command "cd /tmp"
	# command "wget http://mirror-fpt-telecom.fpt.net/fedora/epel/6/i386/epel-release-6-8.noarch.rpm"
	command "rpm -ivh http://mirror-fpt-telecom.fpt.net/fedora/epel/6/i386/epel-release-6-8.noarch.rpm"
end

execute "pip" do
  command "yum -y install python-pip"
end

execute "flask" do
	command "pip install flask"
end

execute "stopiptables" do
	command "service iptables stop"
end

execute "scipy" do
	command "yum -y install numpy scipy python-matplotlib ipython python-pandas sympy python-nose"
end

template "/etc/init.d/roger" do
    source "roger.sh"
    owner "root"
    group "root"
    mode "0755"
end

execute "startup" do
	# command "cp /roger/roger.sh /etc/init.d/roger"
	# command "chmod +x /etc/init.d/roger"
	# command "touch /var/log/roger.log"
	# command "touch /var/run/roger.pid"
	command "chkconfig --level 345 roger on"
	command "service roger start"
end

execute "NLTK" do
	command "pip install -U nltk"
end

execute "pybrain" do
	command "pip install pybrain"
end

execute "SQLAlchemy" do
	command "pip install Flask-SQLAlchemy"
end
