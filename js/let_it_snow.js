  /**
   * @file Module's main JavaScript file 
   */
  
  //calling the jQuery plugin when page is ready
  jQuery( document ).ready(function(){
    jQuery('body').flurry({height:Drupal.settings.let_it_snow.let_it_snow_height,frequency:Drupal.settings.let_it_snow.let_it_snow_frequency,
	speed:Drupal.settings.let_it_snow.let_it_snow_speed,small:Drupal.settings.let_it_snow.let_it_snow_small,
	large:Drupal.settings.let_it_snow.let_it_snow_large,wind:Drupal.settings.let_it_snow.let_it_snow_wind,
	windVariance:Drupal.settings.let_it_snow.let_it_snow_variance});
  })