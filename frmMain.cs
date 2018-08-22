using System;
using System.Windows.Forms;

public class frmMain : Form
{
    #region Windows Code
    private void InitializeComponent()
    {
    }
    #endregion
    public frmMain()
    {
        InitializeComponent();
    }
    [STAThread]
    public static void Main()
    {
        frmMain main = new frmMain();
        Application.Run(main);
    }
}