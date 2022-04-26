<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SurveyController extends Controller
{
    //
    public function getSurveys(){
        $result = array();
        for ($i = 1; $i < 16; $i++){
            $path = storage_path() . "/surveys/${i}.json"; 
            $json = json_decode(file_get_contents($path), true);
            if (!in_array($json['survey'], $result)){
                array_push($result,$json['survey']);
            }
        
        }
        return response()->json($result);
    }
}
