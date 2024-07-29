# Neural Networks Working with Data

In this exercise we ask you all to successfully standardize and normalize the [water_potability.csv](./water_potability.csv) and successfully feed it through a Binary Neural Network built with `nn.Module`.

## Steps

1. Identify number of features
2. Create a Binary Classification model with the correct `Initial` and `Activation` Layers.
3. Feed the first row of Data into your Model to ensure it's able to accept the correct number of features
4. Read the csv file utilizing `Pandas`
5. Identify if there are `null` values in your csv, if so adjust your data so there aren't any.
6. Utilize `scikit-learn` to standardize and normalize data.
7. Utilize `scikit-learn` to break up your data into 2 batches of training and testing data where 20% of data is for testing and 80% is for training.
