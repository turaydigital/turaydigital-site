CloudKit.configure({
  containers: [{
    containerIdentifier: "iCloud.com.turaydigital.StoreManagement",
    apiTokenAuth: {
      apiToken: "bc86d3546327d0e3b7956767aaf92c91282fdbbb8620cecc2249aaa3f63c36e7"
    },
    environment: "development"
  }]
});

const container = CloudKit.getDefaultContainer();
const publicDB = container.publicCloudDatabase;

console.log("CloudKit connected:", publicDB);