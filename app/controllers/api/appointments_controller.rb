class Api::AppointmentsController < ApplicationController

  def index
    @appointments = Appointment.all
    render :index
  end


  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render :show
    else
      render json: @appointment.errors.full_messages, status: 422
    end
  end

  def show
    @appointment = Appointment.find(params[:id])
    render :show
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    @appointment.destroy
    render :show
  end



  private

  def appointment_params
    params.require(:appointment).permit(
      :user_id,
      :doctor_id,
      :address,
      :date
    )
  end
end
