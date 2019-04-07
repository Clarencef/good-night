Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  resources :user, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :relationships, only: [:create, :destroy]
      resources :user, except: [:new] do
        resources :sleep_records, path: 'sleep-record', except: [:new]
      end
    end
  end
end
