Vagrant.configure('2') do |config|
  config.vm.box      = 'ubuntu/trusty64'
  config.vm.hostname = 'dev-box'

  config.vm.provider "virtualbox" do |vb|
	# Don't boot with headless mode
	# vb.gui = true

	# Use VBoxManage to customize the VM. For example to change memory:
	# vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
  
  config.vm.network :forwarded_port, guest: 3000, host: 3000
end