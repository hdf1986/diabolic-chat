module Api
  module V1
    class SectsController < ApplicationController
      before_action :authenticate_user!, only: [:subscribe]
      before_action :set_sect, only: [:subscribe]

      def index
        render json: Sect.all
      end

      def chat
        SendMessage.call(params: params)
        head :ok
      end

      def subscribe
        SectSubscription.create!(user: current_user, sect: @sect)
        head :created
      rescue
        head :not_acceptable
      end

      private

      def set_sect
        @sect ||= Sect.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        head :not_found
      end
    end
  end
end
