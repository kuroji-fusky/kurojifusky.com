module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "measurement-protocol": {
    config: {
      apiSecret: env('GA_API_SECRET'),
      measurementId: env('GA_MEASUREMENT_ID'),
      useValidationServer: false,
    }
  },
})
