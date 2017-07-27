class Api::SpecialtiesController < ApplicationController

  def index
    @specialties = Specialty.all
    render 'api/specialties'
  end

  def show
    @specialty = Specialty.find(params[:id])
    render 'api/specialties/specialties'
  end

  private

  def specialty_params
    params.require(:specialty).permit(
    :name
    )
  end
end
