source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "~> 5.1.4"
gem "pg", "~> 0.18"
gem "puma", "~> 3.7"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "coffee-rails", "~> 4.2"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.5"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]

  gem "pry-rails"
  gem "factory_girl_rails"
  gem "faker"
  gem "figaro"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"

  gem "annotate"
  gem "graphiql-rails"
  gem "guard", require: false
  gem "guard-bundler", require: false
  gem "rubocop", require: false
end

group :test do
  gem "database_cleaner"
  gem "rspec-rails"
  gem "shoulda-matchers", git: "https://github.com/thoughtbot/shoulda-matchers.git", branch: "rails-5"
  gem "simplecov"
end

group :development, :tddium_ignore, :darwin do
  gem "terminal-notifier-guard", require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "bootstrap-sass"
gem "font-awesome-rails"
gem "jquery-rails"

gem "carrierwave"
gem "devise"
gem "graphql"
gem "jwt"
gem "kaminari"
gem "mini_magick"
gem "money"
gem "simple_form"
gem "slim-rails"
gem "webpacker"
