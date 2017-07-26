class Api::DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
    render :index
  end

  def show
    @doctor = Doctor.find(params[:id])
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
