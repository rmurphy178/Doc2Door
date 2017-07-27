class Api::SpecialtiesController < ApplicationController

  def index
    @specialties = Specialty.all
    render "api/specialties/index"
  end


  private

  def specialty_params
    params.require(:specialty).permit(
    :name
    )
  end
end
