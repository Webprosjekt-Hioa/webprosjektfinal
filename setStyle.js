function adaptPage()
{
    var normal = document.getElementById("color-normal");
    var highcontrast = document.getElementById("color-highContrast");

    if (normal == null && highcontrast == null)
    {
        alert("issue with highcontrast of normal");
    }

    if (normal.disabled == false)
    {
        normal.disabled = true;
        highcontrast.disabled = false;
    }
    else if (highcontrast.disabled == false)
    {
        normal.disabled = false;
        highcontrast.disabled = true;
    }




}