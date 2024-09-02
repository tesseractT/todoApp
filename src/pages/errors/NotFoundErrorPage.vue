<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body text-center">
                        <h1 class="display-1">404</h1>
                        <p class="lead">Page <code> 
                            {{ $route.params.notFound }}
                        </code>
                            not found</p>
                        <router-link :to="{ name: 'tasks'}" class="btn btn-primary">Go to Tasks</router-link>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>