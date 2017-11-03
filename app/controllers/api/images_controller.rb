class Api::ImagesController < Api::BaseController
  def create
    @image = current_user.images.new(image_params)

    if @image.save
      render json: { image: { id: @image.id } }, status: 200
    else
      render json: { errors: @image.errors.full_messages }, status: 402
    end
  end

  private

  def image_params
    params.require(:image).permit(:file)
  end
end
