﻿namespace Spinoza.Backend.Managers.TestCatalog.Tests.Models
{

    // ReSharper disable ClassNeverInstantiated.Global
    public class TestChangeResult
    {
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public string Id { get; set; }

        public string SchemaVersion { get; set; } = "1.0";
        // ReSharper disable UnusedAutoPropertyAccessor.Global
        public string MessageType { get; set; }
        public string ResourceType { get; set; }
        public string ActionResult { get; set; }
        public string Reason { get; set; }
        public int ReasonId { get; set; }
        public string Sender { get; set; }
#pragma warning restore CS8618 


    }
}