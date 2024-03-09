we created two copies of our API call so that happens that ,
we have one state which is [allRestaurants, setAllRestaurants] = usestate([]) and second is [filteredRestaurants, setFilteredRestaurants] = usestate([])

The allRestaurant state is made to make the shimmer effect so what happenes when we call the api there is some time between that let's say 2seconds . so what happens when there is no data we can say that data length is zero .

This is the time to render the shimmmer effect and when the datat is fetched we pass the data to setRestaurants which fills the Array with API data ,so at this time restaurant state length is not 0. it has some data

we also uses a early Return in react which commands that if allRestaurants is empty don't render the data

filteredRestaurants --> used to filter the specific restaurantCards which is input by the user in the searchInput and then it updates setfilteredRestaurant by the filtered items.
so what happens we take 2 params in this function (searchInput, restaurants)
restaurants is taken because we filter cards from the restaurants which is whole arrray untouched after API calling) and then we filter from the restaurants state which is after the fetched data so what happenes in returns a new array with the filter items return and then we update our setfilteredRestaurants by new array that the functions returns.

we use filter method in restaurant state because we are filtering from original array of data which is untouched when fetched after API call.
because it returns a new array and if we filter from filteredrestaurants it tries to filter from the filter item not from the whole array.

and then we put a onclick on a search button which is the function we made use to filter restaurants and we pass it (searchInput , allrestaurants);

For implementing the shimmer UI we have to make sure that we don't render it after the data is fetched . so when the API data which is stored in our state (allrestaurants) we say that if allRestaurants length is === 0 then show shimmer component otherwise show our filteredRestaurants

for making a shimmer UI we made a shimmer component and a card component - so a card component basically to implement some animaation and styles to our card strucutre like title,name,image,tags,etc... these are mini componnts inside a card that have shimmer UI but in a structured manner.

and then we made a shimmer componnet which basically creates a new array that takes shimmer_card_units(basically no.of shimmer animations to show on screen so no of restaurants in API is 20 so we made 20 units to show on screen we define some styles for gap between these shimmers)and fills it with 0 and then we map over the array and for each array index we rendered the <shimmerCard component> we applies the shimmer animations to it .

//chapter 7 - finding the path - react router dom;

for that first step is to import createBrowserRoute from react-router-dom :

createBrowserRoute --> basically creates a routing configuration for our componennt, configuration means we can configure/change it according to our needs.
eg -> we can choose which path loads when we go to that path. so if our path is "/" load our <App Layout>component , if my path is "/about" load our aboutUs component;

After defining the routing configuration we have to provide this configuration for the process of rendering , so for that we import RouterProvider from react-router-dom which provides the configuration to our react component from where we can use it or render the configuration.

so for providing the routing configuration to the component where we have to render it. we render it in root.render() function and instead of rendering a component we render the
routerProvider and pass the routing configuration to it.
eg - root.render(<RouterProvider router={appRouter}>)

what if page url we given is incorrect ? answer is it gives a error in the screen which react has throw this error.so we can make an error component to show when there is something other path user has given instead of defining path in the router configuration. so for that we have errorElement which handles the errorelement when there is other path other than defining path.

for specifying our error more we have one more hook which is useRouteError hook which is given by hte react-router-dom which gives more infomration about the error. this hook provides a error object and you can use that object to specify your error more precisely and decorativey to the user.

//removing the problem where when we go to another page we lose our header component so for that we use children routes.
so what happenes parentRoute which is basically your header (bcoz you want to stay intact and every path you defined in the children routes are come after the header component as an outlet component) have children routes , which have some defined configurations and these configuratoins are further push into parentRoute as an outlet component.

we have to import oulet from "react-router-dom'.

an outlet component is a componenet which replace the child routes whenever the specific child path is entered or clicked in the websiet.

//link tag and link tag in react-router-dom
in simple anchor tag the whole page is refreshed when we navigate to the other page.
in link tag of react-router-dom whole page is not rendered only that component rendered which is clicked.

//two types of routing client and server side routing
client side routing requires no network calls to fetch that route
server side routing requires network calls to fetch that route and put it into the server

//dynamic routing or nested routing --> helps in nested routing for eg- clicked on a restaurant crd to get more infomration about a specific recipe.
we pass /restaurants/:resId --> so resid is dynamic means we can assign a id to all our restaurant cards and this would be dynamic so for eg-if we have 20 cards all have different IDs and when clicking on a specific card the resId of that card is replaced by :resId in the routing configuration.

eg-we can us swiggy api to fetch that resid of a restaurant so it replaced configuration resid and give me about info about that restaurant

we use useeffect for calling swiggy restaurant menu api and then we created a state for update it to our restaurantMenu component when it fetches the data from the api.
and we can also show shimmer when our state doesn't have anything (means if it has not data ) then we show shimmer ui componenet.

we have seting the [resinfo, setresifo] = usestate(null); because it doesn't have anything because we hve not cliked on a restarant card so that's why it's empty and when a restaurant card is clicked it fetches the data from the api by setresinfo(json) with a unique resid and name and show it to the user.

we have passed json.data to setresinfo and now the state is updated that's the time to fetch the data when user cliked on restaurnt.
so for fetching it we us resinfo?.cards?.cards?. ...... /bocz resinfo has data.name already

useParam is a hoook given by the react-router-dom which is used for dynamic route loading .
it basically returns a object of that resid. eg if resid is 425 it shows 425 that's why we destructure/extract our resid so that if it contains any resid in the api which is id. it basically behaves like that. so we pass the resid to the id of the api which is inside the api url.

for making it clickable when clicking on restaurants cards it should take me on the specific card restaurant menu .for this we use Link tag from react-router-dom

for doing that we have to provide the restaurantCard component which is mapped in body.jsx componenet we have to Link it using Link tag for the url of /restaurants/(restaurant.data.id)
we have to go to that restaurant menu whose restaurant card id is whatever we clicked because we have given a id to each restaurant cards and inside the api of restaurant cards we have restaurant menu so that if we give the id of the restaurant card it automatically go through that route using the id of the card.

//chapter 9 -> optimising our app
custom hooks ?
//you can use a folder to store reusable hooks.
why -> readability, usability, maintainability, modularitiy,makes code testable.
//we use custom hooks to extract the logic of any component and we can store it as a componenet with a use prefix.

for importing logica of RestaurantMenu component for getting the data from the API
we just import the custom hook in RestaurantMenu componenet and in RestaurantMenu componneet , we pass the resID to the custom hook and stored it over a const variable.
and after that all the logic for getting the data from the api is transferred to the custom hook componennet.

//lets create a custom hook from scratch offline feature.
//for creating it we use window event listener online --> which is an event that triggers whenever you go online and there is similiar for offline also.

in our body componenet where we want to render the whole componenet where we early return that if we are offline then we render that offlne, plz check your internet connection. if not offline then show what --> data.

we just use our useOnline hook and store it inside offline variable.

then we create useOnline custom hook componenet and make a state variable to track between offlne and online. we pass default value of this state is true. means online.
so for that we have window.offline and online event listerners , but we have to run window.online only when the page loads (only one time) so for that we use useEffect by just passing an empty dependancy array and we just put our event listeners in that hook and we say that whenever we are online --> setisOnlne(true) and when offline -> setisonline(false);

and whta the componenet returns --> it returns the state variable which we have made.

so we just make a custom hook useOnline and pass it what -->

custom hooks are a great example of how libraries are made

so there are 2 use cases of custom hook either we can extract the logic from a componenet or we can create a new logi/feature and made it using custom hooks from scratch.

we have also to remove event listerners because the browser cache the event listenrs and run it all every time so we have to remove those event listnerse by giving a cleanup function

parcel is bundle all our components --. which is good but it's not good when there are 100 of components where we should not bundle our code into a single file because it incresae the bundle size very high/huge, that's why bundling is done in limit.
so what we have to do we have to only load those components which could be used by the user.
not all components are loaded.
for eg- i have to only load a particuar componenet only when the user engage/click on it.it is also known as on-demand-loading.
also caled dynamic import and lazy loading.

lazy loading is a function wihch takes a callback function and it do a dynamic import of that componenet and pass that componenet in the router with the wrapper of suspense component.

so what is lazy loading is that it is a function which tells the react that it is loaded and the browser doesn't even known that a another component is made or not , so we just provide a link to the browser and whenver usre clicks on link it loads the componnet.
(the component we made just loaded very fast in the browser but doesn't show it because we made it a suspense componenet) but it doesn't load the componenet it suspend it so that's why we use suspense from react. which creates a suspense that this componenet is existed and it is a suspense component or it loads whenever we clicks on it.

so if our suspense components bundle size is very huge it takes some time let's say 1 to 2s so what should be shown to the user in those 1 - 2s ? answer is shimmer. so for this we have a fallback prop and we pass it shimmer compoonent we made.

we don't need bundle chunking in small applications.

never lazy import a componenet inside another componenet.
//chapter 10 = tailwind css

///chatper 11 - Data is the new
React dev tools chrome extension -> helps in debuggin our react code
passing data from parent to child and then its child and then its child and then its child.... is known as prop drilling in react. it consits a chain of state.
parent -> child ->its child -> its child ......and so on....

but it's not the good way for passing data because it makes code

passing data from child to parent -> generally less specific cases for that.

//collapsable accordian --> it is not easy as you think means if 1 is showed and if you click on another one it should close the 1 and open the 2nd means only 1 is shown and other one if open is closed.

steps are :
for doing that we have to also modify other states . bocz each accordinan has its own state.
we cannot directly modifying state of siblings.
what we can do is we can change the state of parent because it controls all the childs and siblings. this concept is known as lifting state in react.

my parent- instamart will control state of all

but doing this it will make the code very repetitive and cluttered and u have to manually change the values of each sectoin.
for fixing this --> i will just keep a state of what section is visible if i click on it.

profiler shows you flamegraph which shows how a specific components takes time to load.
it is a part of react dev tools.

let's say you want to build a login lougout feature for all componnets so which just made a centralized place where we declare that state and we can use it across anywhere.

createcontext ---> creates a context for defiing state variables in a centralized place and useContext helps in using those states by passing usecontext(createConext(componnete name))

context is like useState but global useState where it is accessbile all over the componments.

you can modify your userContexxt and modify the values you define the userContext component where you can centralized your information.
createContext is used for creating context (a decentralized store for state variables) and useContext helps in using those state variables acorss anywhwere.

state is local context is global state .
we have only put state variables inside context which would be used across anywhere .

for overwriting the state variables which are defined in a centralized component we have to also provide some context for overwriting the state variables so for providing the context for overwriting it is provided by userContext. provider and we wrap our whole app inside it.
(heder, body, footer wraped in userContext. provider)
we have wrapped it around our whole app because we want to use that state variables across my whole components if we dont' want to use it at a specified components let's say header components -> so what happens , that it shows the state which cannot be modified and which is default value of state variables defined in centralized components.

so it became a powerful hook which allows us to modify states varaibles in a specific part of our app .

it has a prop which is value
and instead of passing previous state data we want the data to be overwriting so we pass it the the state variable ( so that it overwrites it eg : user : user) so whenever we tries to modfy our state it modifies across all components.

so basically the userContext has a default value which is overwritted by using userContext.provider . so default value is in userContext component which is overwritten in our App.jsx component which is centralized component of our app. and we provide a usercontext.provider and wrap it around our header,footer, body componnents. which when changed takes effect in all components.

userContext components --> default value(which is provided in this component );
and in App components which is --> centralized component --> we have a state variable [user, setUser] the default value of user is defined in userContext component and we have use userContext. provider to overwrite the default value written in usercontext by a value prop which takes which value to be overwrite we pass if default value is user then overwrite user so it looks like this value={
user : user//this overwrites the default value by a state we defined in app.js called setUser and the new value is re-rendered and stored in user state variable.
}

