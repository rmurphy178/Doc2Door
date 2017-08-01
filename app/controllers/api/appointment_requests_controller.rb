class Api::AppointmentRequestsController < ApplicationController
  before_action :require_logged_in

 def index
   @appointment_requests = AppointmentRequest.all
   if current_user
     @appointment_requests = @appointment_requests.where(user_id: current_user.id)
   end
   render :index
 end

 def show
   @appointment_request = AppointmentRequest.find(params[:id])
 end

 def create
   @appointment_request = AppointmentRequest.new(appointment_request_params)
   @appointment_request.user_id = current_user.id

   if @appointment_request.save
     render :show
   else
     render json: @appointment_request.errors.full_messages, status: 422
   end
 end

 def update
   @appointment_request = AppointmentRequest.find(params[:id])
   render json: { message: "No appointment request found", status: 404 } if @appointment_request.nil?
   if @appointment_request.update(appointment_request_params)
     render "api/users/#{current_user.id}/appointment_requests/show"
   else
     render json: @appointment_request.errors.full_messages, status: 422
   end
 end

 def destroy
   appointment = AppointmentRequest.find(params[:id])
   @appointment_request = appointment
   appointment.destroy
   render :show
 end

 def appointment_request_params
   params.require(:appointment_request).permit(:doctor_id, :user_id, :date, :address, :details)
 end
end
