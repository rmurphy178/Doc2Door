class Api::AppointmentsController < ApplicationController

  def index
    @appointments = Appointment.all
  end

  def create
    @appointment = Appointment.new(appointment_params)
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
