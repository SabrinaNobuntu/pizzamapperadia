#!/bin/bash
cd ..
git clone https://github.com/JoaoVictorNobuntu/frontend
cd frontend
ng add @angular/material
npm install bootstrap@4.1.3 jquery@3.3.1 popper.js@1.14.3 --save 
cd src/app
ng g m core
cd core
mkdir components
cd ..
ng g m shared
cd shared
mkdir components 
mkdir model
mkdir services
cd ..
mkdir modules
cd ../../..
mkdir backend
mkdir backend/routes
mkdir backend/models
mkdir backend/app
mkdir backend/app/controllers
mkdir backend/app/middleware
mkdir frontend/src/enviroment
mkdir frontend/src/assets/dicionario
mkdir frontend/src/assets/dicionario/menu
cd frontend
npm install
cd ..
cd frontend/src/app/modules/
ng g m customers --routing
cd customers
ng g c CustomersForm
ng g c ListCustomers
mkdir shared
cd ..
cd ../../../..
cd backend/models
mi g app mean index > index.js
cd ..
mi g app mean server > server.js
npm init -y
npm install express mongoose cors --save
cd ..
mi g app angular appModule > frontend/src/app/app.module.ts
mi g app angular appRouting > frontend/src/app/app-routing.module.ts
mi g app angular appComponentHTML > frontend/src/app/app.component.html
mi g app angular appComponentTS > frontend/src/app/app.component.ts
mi g app angular indexHTML > frontend/src/index.html
mapperidea generate app mean mongoModel entityName=Customers > backend/models/customers.model.js
mapperidea generate app mean apiController entityName=Customers > backend/app/controllers/customers.controller.js
mapperidea generate app angular model entityName=Customers > frontend/src/app/modules/customers/shared/customers.model.ts
mi g app angular dataService entityName=Customers > frontend/src/app/modules/customers/shared/customers.service.ts
mi g app angular appRoutingChild entityName=Customers > frontend/src/app/modules/customers/customers-routing.module.ts
mi g app mean routes entityName=Customers > backend/routes/customers.routes.js
mi g app angular listComponentHTML listName=Customers >  frontend/src/app/modules/customers/list-customers/list-customers.component.html
mi g app angular listComponentTS listName=Customers >  frontend/src/app/modules/customers/list-customers/list-customers.component.ts
mi g app angular detailsComponentHTML editorName=Customers >  frontend/src/app/modules/customers/customers-form/customers-form.component.html
mi g app angular detailsComponentTS editorName=Customers >  frontend/src/app/modules/customers/customers-form/customers-form.component.ts
mi g app json jsonClass entityName=Customers > frontend/src/assets/dicionario/customers.json
mi g app mean customQuery > backend/app/controllers/customQuery.util.js
mi g app mean checkIfDateIsOlder > backend/app/middleware/checkIfDateIsOlder.middleware.js
mi g app json jsonTransloco translate=en > frontend/src/assets/i18n/en.json
mi g app json jsonTransloco translate=pt > frontend/src/assets/i18n/pt.json
mi g app angular environment > frontend/src/enviroment/environment.ts
mi g app json jsonMenu > frontend/src/assets/dicionario/menu/menu.json
