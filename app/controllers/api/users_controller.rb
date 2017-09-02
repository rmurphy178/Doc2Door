class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render `api/users/${id}`
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def update
	@user = User.find_by_id(params[:id])
	@user.update(user_params)
	render `api/users/${id}`
end

	private

	def user_params
		params.require(:user).permit(:email, :password,
		 :zip, :first_name, :last_name)
	end

end
