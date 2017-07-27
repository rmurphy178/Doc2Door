class Api::DoctorsController < ApplicationController

  def index
    @doctors = Doctor.where(specialty: doctor_params[:specialty])
    render 'api/doctors'
  end

  def show
    @doctor = Doctor.find(params[:id])
    render `/api/doctors/${id}`
  end

  private

  def doctor_params
    params.require(:doctor).permit(
    :name,
    :rating,
    :image_url,
    :specialty
    )
  end
end
