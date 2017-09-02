Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :appointments, only: [:index, :create, :show]
    resources :doctors, only: [:index, :show]
    resources :specialties, only: [:index]

  end
  root "static_pages#root"
end
