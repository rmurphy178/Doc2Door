class Api::AppointmentRequestsController < ApplicationController

  def index
    @appointment_requests = Appointment_request.all
    render :index
  end


  def create
    @appointment_request = Appointment_request.new(appointment_request_params)
    if @appointment_request.save
      render :show
    else
      render json: @appointment_request.errors.full_messages, status: 422
    end
  end

  def show
    @appointment_request = Appointment_request.find(params[:id])
    render :show
  end

 def appointment_request_params
   params.require(:appointment_request).permit(
    :doctor_id,
    :user_id,
    :date,
    :address
    )
 end
end
