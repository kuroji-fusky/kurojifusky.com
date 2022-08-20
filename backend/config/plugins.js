module.exports = ({ env }) => ({
  "measurement-protocol": {
    config: {
      apiSecret: env('GA_API_SECRET'),
      measurementId: env('GA_MEASUREMENT_ID'),
      useValidationServer: false,
    }
  }
})
