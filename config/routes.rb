Rails.application.routes.draw do
  get 'users/create'

  get 'users/update'

  namespace :api, defaults: { format: :json } do
  end
  root "static_pages#root"
end
