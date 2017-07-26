class Api::SpecialtiesController < ApplicationController
  def index
    @specialties = Specialty.all
    render :index
  end

  def show
    @specialty = Specialy.find(params[:id])
  end


  private

  def specialty_params
    params.require(:specialty).permit(
    :name,
    :doctor_id
    )
  end
end
