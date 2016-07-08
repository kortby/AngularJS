<div class="container">

     


      <!-- Example row of columns -->
      <div class="row">
        <h1>Service</h1>
        <div class="row">
          
          <div ng-repeat="serv in service">
            
            <div class="col-xs-6 col-lg-4">
              <h2>{{ serv.title }}</h2>
              <p>{{ serv.description }}</p>
              <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            
          </div>
            
            
          </div><!--/row-->
      </div>

      <!-- Site footer -->
      <footer class="footer">
        <p>&copy; 2015 Company, Inc.</p>
      </footer>

    </div> <!-- /container -->