class Api::AppointmentsController < ApplicationController

  def index
    @appointments = Appointment.all
    render 'api/appointments'
  end


  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render 'api/appointments/appointment'
    else
      render json: @appointment.errors.full_messages, status: 422
    end
  end

  def show
    @appointment = Appointment.find(params[:id])
  end



  private

  def appointment_params
    params.require(:appointment).permit(
      :user_id,
      :doctor_id,
      :location,
      :time,
      :confirmed
    )
  end
end
