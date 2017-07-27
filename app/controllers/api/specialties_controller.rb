class Api::SpecialtiesController < ApplicationController

  def index
    @specialties = Specialty.all
    render 'api/specialties'
  end

  def show
    @specialty = Specialty.find(params[:id])
    render 'api/specialties/specialty'
  end

  private

  def specialty_params
    params.require(:specialty).permit(
    :name
    )
  end
end
