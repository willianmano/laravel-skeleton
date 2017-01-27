@extends('layouts.admin')

@section('title') View Admin Blade @stop
@section('subtitle') Subtitle @stop

@section('breadcrumb')
    <li><a href="{{url('/')}}"><i class="fa fa-home"></i> Home</a></li>
    <li class="active">Dashboard</li>
@stop

@section('content')
    <h1>hello admin</h1>
@stop