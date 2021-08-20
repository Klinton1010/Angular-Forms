import { AbstractControl, ValidatorFn } from "@angular/forms";

//TYPE 1
/**function forbiddenNameValidator(control:AbstractControl):
{[key:string]:any}|null

forbiddenNameValidator(control:AbstractControl):This is inbuild method
it returns key value pair or null

key is string 
value is any

const forbidden=/admin/.test(control.value)

forbidden returns true or false

if returns true it store the {forbiddenName:{value:admin}} inside the error object

*/
/*export function forbiddenNameValidator(control:AbstractControl):
{[key:string]:any}|null
{
  const forbidden=/admin/.test(control.value)
  return forbidden? {'forbiddenName':{value:control.value}} : null
}*/

//TYPE 2
/**
 This type is accept Regrex as a parameters
 [return callback function] 

 (control:Type):return Type=>{}
 */

export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
    return (control:AbstractControl):
    {[key:string]:any}|null=>{
        const forbidden=forbiddenName.test(control.value)
  return forbidden? {'forbiddenName':{value:control.value}} : null
    }
}




