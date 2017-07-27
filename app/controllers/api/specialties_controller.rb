class Api::SpecialtiesController < ApplicationController

  def index
    @specialties = Specialty.all
  end

  def show
    @specialty = Specialty.find(params[:id])
    render `api/specialties/${id}`
  end

  private

  def specialty_params
    params.require(:specialty).permit(
    :name
    )
  end
end
