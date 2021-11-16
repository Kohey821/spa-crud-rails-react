class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :image

  after_find :set_image_blob_path

  private
    def set_image_blob_path
      self.image_blob_path = rails_blob_path(
        self.image,
        only_path: true
      ) if self.image.attached?
    end
end
