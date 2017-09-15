class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def update
		@user = current_user
			if @user.update(user_params)
				login(@user)
				render :show
			end
	end

	private

	def user_params
		params.require(:user).permit(:email, :password,
		 :zip, :first_name, :last_name, :id)
	end

end
