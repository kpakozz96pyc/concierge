namespace Concierge.Api
{
    internal sealed class ApiConfig
    {
        private readonly string _connectionString;
        private readonly string _awsEndpoint;
        private readonly string _awsFolder;
        private readonly string _awsBucket;
        private readonly string _awsAccessKey;
        private readonly string _awsSecretKey;

        public ApiConfig(string dbConnectionString, string awsEndpoint,string awsBucket, string awsFolder,  string awsAccessKey, string awsSecretKey)
        {
            _connectionString = dbConnectionString;
            _awsEndpoint = awsEndpoint;
            _awsFolder = awsFolder;
            _awsBucket = awsBucket;
            _awsAccessKey = awsAccessKey;
            _awsSecretKey = awsSecretKey;
        }

        public string ConnectionString => _connectionString;

        public string AwsEndpoint => _awsEndpoint;

        public string AwsFolder => _awsFolder;

        public string AwsBucket => _awsBucket;

        public string AwsAccessKey => _awsAccessKey;

        public string AwsSecretKey => _awsSecretKey;
    }
}