import data from "./data/data.json"

const companies = data.companies

type UpdatedCompany = {
  id: number,
  name: string,
  description: string
} 
 
export function getCompanies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(companies);
    }, 800);
  });
}
 
export function getCompany(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const company = companies.find((company) => company.id === id);
 
      if (company) {
        resolve(company);
      } else {
        reject(new Error(`Company with id ${id} not found`));
      }
    }, 800);
  });
}

export function editCompany(updatedCompany: UpdatedCompany) {
  const index = companies.findIndex(company => company.id === updatedCompany.id)

  if (index !== -1) {
    companies[index] = updatedCompany
  }
}

export function deleteCompany(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const companyIndex = companies.findIndex(company => company.id === id);
      
      if (companyIndex !== -1) {
        companies.splice(companyIndex, 1);
        resolve(companies);
      } else {
        reject(new Error(`Company with id ${id} not found`));
      }  
    }, 800);
  });
}

export function getStoredCompany(id: number, key: string) {
  const storedData = localStorage.getItem(`${id}${key}`)
  const storedUpdatedElement = storedData ? JSON.parse(storedData) : null  
  
  return storedUpdatedElement;
}