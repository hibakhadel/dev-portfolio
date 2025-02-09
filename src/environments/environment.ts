declare const process: any;

export const environment = {
    production: false,
    gtmId: 'GTM-KVLRVX5R',
    apiUrl: 'http://localhost:3000',
    recaptcha: {
        siteKey: '6LcWlcoqAAAAAIZOklPXv2KeBVNVYUi7VbUgK1Py' // Replace with your reCAPTCHA site key
    },
    emailJs: {
        publicKey: process.env['EMAILJS_PUBLIC_KEY'] || '61_cRGvJg_V4ko_cd',
        serviceId: process.env['EMAILJS_SERVICE_ID'] || 'service_y5wcc5o',
        templateId: process.env['EMAILJS_TEMPLATE_ID'] || 'template_3v511nk'
    }
};