# Good night

An system allows user to record their sleep time.

### Prerequisites

Ruby version: 2.5.1

Rails version: 5.2.2

### Installing & Getting Started

Install Bundler to manager dependencies: ` gem install bundler `

Run the installers:
```
$ bundle install
$ rails webpacker:install       # OR (on rails version < 5.0) rake webpacker:install
$ rails webpacker:install:react # OR (on rails version < 5.0) rake webpacker:install:react
$ rails generate react:install
```

Setup the database:
```
bundle exec rake db:migrate
bundle exec rake db:seed
```

Start the application:
```
$ bundle exec rails s
$ bin/webpack-dev-server
```

## User Story

1. Clock In operation, and return all clocked-in times, ordered by created time.
2. Users can follow and unfollow other users.
3. See the sleep records over the past week for their friends, ordered by the length of their sleep.

## Built With

* [webpacker](https://github.com/rails/webpacker) - Easy to use the JavaScript pre-processor and bundler webpack 4.x.x+ to manage application-like JavaScript in Rails.
* [react-rails](https://github.com/reactjs/react-rails) - A flexible tool to use React with Rails.
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap 4 components built with React.
* [date-fns](https://github.com/date-fns/date-fns) - Simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.


## Authors

**Albert Fang**