# Customer Prospects User Interface
This is a frontend user interface to display customer prospects summaries and qauntities to companies. The idea is to display lots of data in a quick and intuitive way for the app users.
Run this UI at: https://customer-prospect-ui.vercel.app/

The app is built in React, Deployed using Next.js, hosted on Vercel.
It includes Interactive charts created using Nivo.
All data is sample data found in the public folder as [opportunities.json](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/public/opportunities.json)

The UI populates a [Table.js](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/components/Table.js) component from a sample [json](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/public/opportunities.json), but this is a good place to connect to a database (I plan to use Prisma and Supabase).
Click on the table to show a pop-up [Card.js](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/components/Card.js) component with more row data passed as props.
A keyboardListener is setup with useEffect() React hook in [Table.js](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/components/Table.js), so you can use the arrow keys to scroll to the next card.
Click the close icon to close the card to set the display state using the useState react hook.
Click the light/dark icon to switch between light and dark mode using the theme.js context.
Hover-over or click the [trend](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/components/ProbabilityFactorsTrendChart.js) and [history](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/components/ProbabilityHistoryChart.js) chart components to see nested subdata by using Nivo Chart.
See example pictures below!

## Dependencies:
1. **Package Manager**: Yarn (or node package manager)
2. **Charts**: Nivo
3. **UI**: React
4. **Styling**: material UI
5. **Frontend Framework**: React


### Table Data (Dark Mode)
![alt text](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/public/prospectTablePic.png)

### Row Data Displayed with Card (Dark Mode)
![alt text](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/public/prospectCardPic.png)

### Row Data Displayed with Card (Light Mode)
![alt text](https://github.com/RamonJOrtega/customer-prospect-UI/blob/main/public/prospectTablePicLight.png)

