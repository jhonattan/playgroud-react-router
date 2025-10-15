import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { deleteCompany } from "../../services/companies";
 
export async function action({ params }: ActionFunctionArgs) {
  const companyId = Number(params.companyId);

  await deleteCompany(companyId);
  return redirect("/companies");
}