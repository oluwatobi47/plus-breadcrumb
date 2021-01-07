# NgxBreadcrumb

An Angular module generating breadcrumbs based on the routing state with support for all angular versions from angular 5+.

This package is a modified version of the ng5-breadcrumb package by AkioCloud(AissamJ)


## Installation

Run `ng serve plus-breadcrumb`


## Usage
Import the PlusBreadcrumbModule module into your target module using forRoot()

import {PlusBreadcrumbModule} from 'plus-breadcrumb';


	@NgModule({
        imports: [PlusBreadcrumbModule.forRoot()]
    })
    export class AppModule {
        ...
    }

Alternatively you can import the module into your module and manually provide its service


	@NgModule({
        imports: [PlusBreadcrumbModule],
        providers: [BreadcrumbService]
    })
    export class AppModule {
        ...
    }

Inject the BreadcrumbService into your component to map your routes

    export class AppComponent {
        constructor(private breadcrumbService: BreadcrumbService) {
        }
    }

Place the breadcrumb selector in your component's html where you added your router-outlet:

	<ngx-plus-breadcrumb></ngx-plus-breadcrumb>
	<router-outlet></router-outlet>

## Inputs
`useBootstrap: boolean` to apply the bootstrap breadcrumb style. Defaulted to true.

	<breadcrumb [useBootstrap]="false"></breadcrumb>

`prefix: string` to have a static prefix as the first breadcrumb which routes to the base root when clicked.

	<breadcrumb prefix="App Title"></breadcrumb>

## BreadcrumbService
Add friendly names for each of your app's routes (paths). Can also specify regular expressions to match routes and assign a friendly name.

    breadcrumbService.addFriendlyNameForRoute('/home', 'Home Sweet Home');
    breadcrumbService.addFriendlyNameForRoute('/home/users', 'All users');
    breadcrumbService.addFriendlyNameForRouteRegex('/home/users/[0-9]/info', 'Information');

Specify a callback function that will supply a name for a specific route or regex.
This is intended to be used when a route contains path params. It allows you display a specific name for the given id contained in the route url.

    breadcrumbService.addCallbackForRoute('/home/users/1', this.getNameForUser);
    breadcrumbService.addCallbackForRouteRegex('^/home/users/[0-9]$', this.getNameForUser);
    
    getNameForUser(id:string):string {
        return 'specific name for user with id';
    }

Hide certain routes (paths) from the breadcrumb trail using an exact url or regex.

    breadcrumbService.hideRoute('/home/secret');
    breadcrumbService.hideRouteRegex('^/home/secret/[a-zA-Z]');


More Updates coming soon
