export default class Gate {

    constructor(user) {
        this.user = user
        this.permissions = user
    }

    searchPermission(permissions, search_query)  {
        if(permissions.length > 0) {
            for ( var i = 0; i < permissions.length; i++) {
                if(permissions[i].slug === search_query) {
                    return true
                }
            }
        }
        else
        {
            return false
        }
    }

    planning_gate_view()  {
        // return 1 == 1;
        let result = this.searchPermission(this.user.permissions, 'planning_gate_view')
        return result == true;
        // return result;
        // return 'planning_gate_view' === result
    }

    isAdmin() {
        return this.user.role === 'superadmin';
    }



}