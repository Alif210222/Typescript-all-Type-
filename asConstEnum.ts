// Enum type 

// type UserRoles = "Admin" | "Editor" | "Viewer"

const UserRole = {
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer",
} as const;


const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {               //* keyof & type of word use kore amra same object ke value and type duita hisabei use korte parteci /
     if(role === UserRole.Admin || role === UserRole.Editor ){
        return true;
     } 
     else return false
}

const isEditPermissable = canEdit(UserRole.Admin)

console.log(isEditPermissable);