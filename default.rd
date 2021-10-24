application "practica6" do
  path "/var/www/nodejs/practica6"
  owner "www-data"
  group "www-data"
  packages ["git"]
  repository "https://github.com/CarlosCante/SAPractica3"
  nodejs do
    entry_point "index.js"
  end
end