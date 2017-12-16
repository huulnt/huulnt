export class AdminPageModel {
    public display_name: string;
    public description: string;
    public address: string;
    public city: string;
    public phone_number: string;
    public email: string;
    public photo: string;
    public price_limit: string;
    public time_open: string;
    public time_close: string;
    public wifi_password: string;
    public latitude: string;
    public longitude: string;
    public status: string;
    public user_id: string;
    public id: string;
    public token: string;
    constructor(item: any, token) {
        this.display_name = item.display_name || '';
        this.description = item.description || '';
        this.address = item.address || '';
        this.city = item.city || '';
        this.phone_number = item.phone_number || '';
        this.email = item.email || '';
        this.price_limit = item.price_limit || '';
        this.time_open = item.time_open || '';
        this.time_close = item.time_close || '';
        this.wifi_password = item.wifi_password || '';
        this.latitude = item.latitude || '';
        this.longitude = item.longitude || '';
        this.status = item.status || '';
        this.user_id = item.user_id || '';
        this.id = item.id || '';
        this.token = token || '';
        return this;
    }
    getData() {
        return {
            'display_name': this.getView(),
            'description': this.description,
            'address': this.address,
            'city': this.city,
            'phone_number': this.phone_number,
            'email': this.email,
            'price_limit': this.price_limit,
            'time_open': this.time_open,
            'time_close': this.time_close,
            'wifi_password': this.wifi_password,
            'latitude': this.latitude,
            'longitude': this.longitude,
            'status': this.status,
            'action': this.getAction()
        };
    }
    getView() {
        return `<a href="#/admin/view/${this.id}">${this.display_name}</a>`;
    }
    getAction() {
        return `<div style="float: right; white-space: nowrap;">` +
        `<a style="padding: 8px;"href="#/admin/edit/${this.id}" " title="Edit">Edit</a></div>`;
    }
    getPhoto() {
        const url = `https://foodsyapp.herokuapp.com/api/place/photo/${this.id}?token=${this.token}`;
        return `<a alt  href="${url}">View Photo</a>`;
    }
}
export class AdminPageModels {
    listItem: any[];
    constructor(listItem: AdminPageModel[] = [], token) {
        this.listItem = listItem.map((item: AdminPageModel) => {
            return new AdminPageModel(item, token);
        });
    }
    getData() {
        return this.listItem.map((item: AdminPageModel) => item.getData());
    }
}
