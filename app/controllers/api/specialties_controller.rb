class Api::SpecialtiesController < ApplicationController

  def index
    @specialties = Specialty.all
    render :index
  end

  def show
    @specialty = Specialty.find(params[:id])
    render :show
  end

  private

  def specialty_params
    params.require(:specialty).permit(
    :name
    )
  end
end
