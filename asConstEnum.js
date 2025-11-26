// Enum type 
// type UserRoles = "Admin" | "Editor" | "Viewer"
var UserRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);
