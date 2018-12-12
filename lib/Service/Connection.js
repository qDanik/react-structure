export class Connection {
  status = navigator.onLine;

  connect = clientInformation.connection;

  constructor(callback = null) {
    this.downlink = this.connect.downlink;
    this.effectiveType = this.connect.effectiveType;
    this.rtt = this.connect.rtt;
    this.saveData = this.connect.saveData;

    if (callback) {
      this.setCallback(callback);
    }
  }

  setCallback(callback) {
    this.connect.onchanged = callback;

    return this;
  }
}
